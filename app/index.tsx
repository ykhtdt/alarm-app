import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Switch,
  TouchableOpacity,
} from "react-native"

interface Alarm {
  id: string
  time: string
  days: string[]
  enabled: boolean
}

export default function HomeScreen() {
  const [alarms, setAlarms] = useState<Alarm[]>([
    { id: "1", time: "07:30", days: ["월", "수", "금"], enabled: true },
    { id: "2", time: "09:00", days: ["토", "일"], enabled: false },
  ])

  const toggleAlarm = (id: string) => {
    setAlarms((prev) =>
      prev.map((alarm) =>
        alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm
      )
    )
  }

  const renderAlarm = ({ item }: { item: Alarm }) => (
    <View style={styles.alarmContainer}>
      <View>
        <Text style={styles.timeText}>{item.time}</Text>
        <Text style={styles.daysText}>{item.days.join(", ")}</Text>
      </View>
      <Switch
        value={item.enabled}
        onValueChange={() => toggleAlarm(item.id)}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>알람</Text>

      <FlatList
        data={alarms}
        keyExtractor={(item) => item.id}
        renderItem={renderAlarm}
        contentContainerStyle={{ gap: 16 }}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ 알람 추가</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 24 },
  alarmContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
  },
  timeText: { fontSize: 24, fontWeight: "600" },
  daysText: { fontSize: 14, color: "#666" },
  addButton: {
    marginTop: 32,
    backgroundColor: "#4caf50",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})
