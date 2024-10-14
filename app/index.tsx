import { NativeWindStyleSheet } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import SubmitForm from "@/components/SubmitForm/SubmitForm";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <SubmitForm />
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
}
