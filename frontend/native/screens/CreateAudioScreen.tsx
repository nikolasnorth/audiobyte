import { Text, View } from "@components/Themed";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Audio } from "expo-av";

export default function CreateAudioScreen() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [recordingUri, setRecordingUri] = useState<string | null>(null);
  const [isRecordingPlaying, setRecordingPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    // Unload recording from memory when component unmounts.
    function whenComponentUnmounts() {
      sound?.unloadAsync().then();
    }

    return () => whenComponentUnmounts();
  }, [sound]);

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
      const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      setRecording(recording);
      console.log("Started recording...");
    } catch (e) {
      console.error(e);
    }
  }

  async function stopRecording() {
    try {
      if (recording == null) {
        console.error("Tried to access recording but it was null.");
        return;
      }
      await recording.stopAndUnloadAsync();
      setRecordingUri(recording.getURI());
      setRecording(null);
    } catch (e) {
      console.error(e);
    }
  }

  async function startPlayingRecording() {
    try {
      if (!recordingUri) {
        console.error("Tried to access recording uri but it was null.");
        return;
      }
      const { sound } = await Audio.Sound.createAsync({ uri: recordingUri });
      setSound(sound);
      await sound.playAsync();
      setRecordingPlaying(true);
    } catch (e) {
      console.error(e);
    }
  }

  async function stopPlayingRecording() {
    try {
      await sound?.unloadAsync();
      setSound(null);
      setRecordingPlaying(false);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Audio</Text>
      <Button
        title={recording ? "Stop recording" : "Start recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      <Button
        title={isRecordingPlaying ? "Stop" : "Play"}
        onPress={isRecordingPlaying ? stopPlayingRecording : startPlayingRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
