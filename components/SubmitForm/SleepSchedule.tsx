import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";
import { Sun, Moon } from "react-native-feather";

export function SleepSchedule({
  wakeUpTime,
  onChangeWakeUpTime,
  bedTime,
  onChangeBedTime,
}: {
  wakeUpTime: Date;
  onChangeWakeUpTime: (event: any, selectedDate?: Date) => void;
  bedTime: Date;
  onChangeBedTime: (event: any, selectedDate?: Date) => void;
}) {
  return (
    <View className="flex-row justify-between ml-4 mr-8">
      <View className="flex-row">
        <Sun stroke="#D4D4D8" width={24} height={24} />
        <DateTimePicker
          testID="wakeUpTimePicker"
          value={wakeUpTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChangeWakeUpTime}
        />
      </View>
      <View className="flex-row">
        <Moon stroke="#D4D4D8" width={24} height={24} />
        <DateTimePicker
          testID="bedTimePicker"
          value={bedTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChangeBedTime}
        />
      </View>
    </View>
  );
}
