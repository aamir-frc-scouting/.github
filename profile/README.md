# FRC Scouting Apps

**169,000+ data points** · **11 events** · **6 apps** · **4 seasons**

Four years of scouting apps for [FRC Team 1730 (Team Driven)](https://www.thebluealliance.com/team/1730) in Lee's Summit, MO, from learning as a freshman scout lead to shipping Flutter apps as a senior. [View all seasons](https://www.thebluealliance.com/team/1730)

**[View the full story](https://aamir-frc-scouting.github.io/.github/)**

---

## The Timeline

### 2022 · Rapid React · Learning
Freshman year. I served as scout lead while seniors Heath Crump and Caden Findlay built and taught me the app. Team 1730 won the [Newton Division](https://www.thebluealliance.com/event/2022new) and competed on [Einstein](https://www.thebluealliance.com/event/2022cmptx) as 2nd pick of Alliance 3. [View 2022 season](https://www.thebluealliance.com/team/1730/2022)

### 2023 · Charged Up · Solo Developer
Sophomore year. I took over as the team's sole scouting app developer, building an Android app in Java that exported QR codes scanned into Excel. [View 2023 season](https://www.thebluealliance.com/team/1730/2023)

**58,032 data points** across 3 events including Championship

### 2024 · Crescendo · Match + Pit Apps
Junior year. Built a second app to solve pit scouting and maintained both through the season. [View 2024 season](https://www.thebluealliance.com/team/1730/2024)

**61,384 data points** (match + pit) across 5 events including Championship

### 2025 · Reefscape · Flutter + Python + SQLite
Senior year. Rewrote both mobile apps in Dart/Flutter, used on Android tablets at events. Built a Python/customtkinter desktop intake app that takes scanned QR strings, validates fields, and inserts them into SQLite. At Heartland, QR data still went into Excel through a Python script. The SQLite intake app ran from GKC through Worlds. [View 2025 season](https://www.thebluealliance.com/team/1730/2025)

**50,085 data points** (match + pit) across 3 events including Championship

---

## Repositories

| Year | Game | Type | Platform | Stack | Repo |
|------|------|------|----------|-------|------|
| 2023 | Charged Up | Match | Android | Java | [frc-scouting-app-2023](https://github.com/aamir-frc-scouting/frc-scouting-app-2023) |
| 2024 | Crescendo | Match | Android | Java | [frc-scouting-app-2024](https://github.com/aamir-frc-scouting/frc-scouting-app-2024) |
| 2024 | Crescendo | Pit | Android | Java | [frc-pit-scouting-app-2024](https://github.com/aamir-frc-scouting/frc-pit-scouting-app-2024) |
| 2025 | Reefscape | Match | Android tablets | Flutter | [frc-scouting-app-2025](https://github.com/aamir-frc-scouting/frc-scouting-app-2025) |
| 2025 | Reefscape | Pit | Android tablets | Flutter | [frc_pit_scouting_app_2025](https://github.com/aamir-frc-scouting/frc_pit_scouting_app_2025) |
| 2025 | Reefscape | Intake | Desktop | Python/SQLite | [frc-database](https://github.com/aamir-frc-scouting/frc-database) |

---

## How It Works

Data moves from the tablets to a laptop by **QR code**, so collection works offline under FRC competition Wi-Fi restrictions.

**2023–2024:** The match apps show a QR code that is scanned into an Excel workbook with a tab per data set, then analyzed with filtering and pivot tables. The 2024 pit app wrote delimited strings to a text file, and QR codes were generated separately for the same scanner workflow.

**2025:** The Flutter apps show a QR code. At Heartland it was scanned into Excel through a Python script. From GKC through Worlds, a volunteer scanned it into the Python intake app, which validates each record and inserts it into SQLite.

---

## Links

- [Team 1730 on The Blue Alliance (all seasons)](https://www.thebluealliance.com/team/1730)
- [Full project site](https://aamir-frc-scouting.github.io/.github/)

---

**Aamir Abatiyow** · Software Engineering student at UCM · [github.com/AamirAbatiyow](https://github.com/AamirAbatiyow)

*Stats verified via [The Blue Alliance](https://www.thebluealliance.com)*
