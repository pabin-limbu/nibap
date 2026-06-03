"use client";

import { SettingPanel } from "../components/setting-panel";
import { TextInputPanel } from "../components/text-input-panel";
import { VoicePreviewPlaceholder } from "../components/voice-preview-placeholder";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { TTSVoicesProvider } from "../contexts/tts-voice-context";

import {
  TextToSpeechForm,
  defaultTTSValues,
  type TTSFormValues,
} from "../components/text-to-speech-form";

export function TextToSpeechView({
  initialValues,
}: {
  initialValues?: Partial<TTSFormValues>;
}) {
  const trpc = useTRPC();
  const { data: voices } = useSuspenseQuery(trpc.voices.getAll.queryOptions());
  const { custom: customVoices, system: systemVoices } = voices;
  const allVoices = [...customVoices, ...systemVoices];
  const fallbackVoiceId = allVoices[0]?.id ?? "";

  // Requested voice may no longer exist (deleted); fall back to first available
  const resolvedVoiceId =
    initialValues?.voiceId &&
    allVoices.some((v) => v.id === initialValues.voiceId)
      ? initialValues.voiceId
      : fallbackVoiceId;

  const defaultValues: TTSFormValues = {
    ...defaultTTSValues,
    ...initialValues,
    voiceId: resolvedVoiceId,
  };

  return (
    <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices }}>
      <TextToSpeechForm defaultValues={defaultValues}>
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <div className="flex min-h-0 flex-1 flex-col">
            <TextInputPanel />
            <VoicePreviewPlaceholder />
          </div>
          <SettingPanel />
        </div>
      </TextToSpeechForm>
    </TTSVoicesProvider>
  );
}
