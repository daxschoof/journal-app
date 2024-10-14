import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { Save } from "react-native-feather";

import { StarRating } from "@/components/SubmitForm/StarRating";
import { SleepSchedule } from "@/components/SubmitForm/SleepSchedule";
import { AddActionRow } from "@/components/SubmitForm/AddActionRow";

export default function SubmitForm() {
  const [summary, setSummary] = useState("");
  const [newAction, setNewAction] = useState("");

  const [wakeUpTime, setWakeUpTime] = useState(new Date());
  const [bedTime, setBedTime] = useState(new Date());

  const [rating, setRating] = useState(0);

  const addAction = () => {};

  const onChangeWakeUpTime = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || wakeUpTime;
    setWakeUpTime(currentDate);
  };

  const onChangeBedTime = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || bedTime;
    setBedTime(currentDate);
  };

  const handleSubmit = () => {
    Alert.alert("Daily Log Submitted", undefined, [{ text: "OK" }]);
  };

  return (
    <>
      <View className="py-5 pl-4 border-b-[2] rounded-t-lg rounded-b-sm bg-zinc-700">
        <Text className="font-bold text-3xl text-zinc-100">Daily Log</Text>
        <Text className="text-zinc-400 text-base">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </Text>
      </View>

      <View className="flex-1 pt-10 px-8">
        <View className="mb-12">
          <Text className="font-semibold text-zinc-200 mb-4 text-[16]">
            Rate your Day
          </Text>
          <StarRating rating={rating} setRating={setRating} />
        </View>

        <View className="mb-6">
          <Text className="font-semibold text-zinc-200 mb-4 text-[16]">
            Sleep Schedule
          </Text>
          <SleepSchedule
            wakeUpTime={wakeUpTime}
            onChangeWakeUpTime={onChangeWakeUpTime}
            bedTime={bedTime}
            onChangeBedTime={onChangeBedTime}
          />
        </View>

        <View className="mb-6">
          <Text className="font-semibold text-zinc-200 mb-4 text-[16]">
            Add Action
          </Text>
          <AddActionRow
            newAction={newAction}
            setNewAction={setNewAction}
            addAction={addAction}
          />
        </View>

        <View className="mb-6">
          <Text className="font-semibold text-zinc-200 mb-4 text-[16]">
            Daily Summary
          </Text>
          <TextInput
            className="bg-zinc-800 text-zinc-300 border-zinc-700 border-[2] rounded p-3 h-44 align-text-bottom"
            multiline
            numberOfLines={4}
            placeholder="How was your day? Write a brief summary..."
            placeholderTextColor={"#9CA3AF"}
            value={summary}
            onChangeText={setSummary}
          />
        </View>

        <TouchableOpacity
          className="bg-zinc-300 flex-row justify-center items-center p-4 mt-8 mx-4 mb-4 rounded-lg"
          onPress={handleSubmit}
        >
          <Save stroke="#18181B" width={24} height={24} />
          <Text className="text-zinc-900 text-base ml-2">Submit Daily Log</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="inverted" />
    </>
  );
}
