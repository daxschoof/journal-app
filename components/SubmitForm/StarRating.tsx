import { TouchableOpacity, View } from "react-native";
import { Star } from "react-native-feather";

export function StarRating({
  rating,
  setRating,
}: {
  rating: number;
  setRating: (rating: number) => void;
}) {
  return (
    <View className="flex-1 flex-row justify-between px-6">
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => setRating(star)}>
          <Star
            stroke={star <= rating ? "#F59E0B" : "#4B5563"}
            fill={star <= rating ? "#F59E0B" : "none"}
            width={32}
            height={32}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
