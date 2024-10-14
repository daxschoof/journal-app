import { TextInput, TouchableOpacity, View } from "react-native";
import { PlusCircle } from "react-native-feather";

export function AddActionRow({
  newAction,
  setNewAction,
  addAction,
}: {
  newAction: string;
  setNewAction: React.Dispatch<React.SetStateAction<string>>;
  addAction: () => void;
}) {
  return (
    <View className="flex-row">
      <TextInput
        className="flex-1 bg-zinc-800 text-zinc-300 bd-zinc-700 border-[1] p-3"
        placeholder="Enter an action..."
        placeholderTextColor="#9CA3AF"
        value={newAction}
        onChangeText={setNewAction}
      />
      <TouchableOpacity
        className="bg-zinc-700 justify-center items-center w-6 rounded h-6 mt-[10px]"
        onPress={addAction}
      >
        <PlusCircle stroke="#D1D5DB" width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
}
