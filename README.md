# AI Two-Way Fraud Detection & Prevention

Website https://kbtg.sorawiss.com/landingpage

> **Protecting Every Transaction, In Real-Time.**
> *KBTG Hackathon 2025*

## The Problem
Mobile banking fraud is at an all-time high. From **call center gangs** to **remote control malware**, scammers are stealing millions daily. Traditional fraud detection happens *after* the money is gone. Banks need a way to stop fraud **while it's happening**, without ruining the experience for legitimate customers.

## Our Solution
**AI Two-Way Fraud Detection & Prevention** is a real-time security middleware that sits between the mobile app and the banking core. It uses on-device telemetry and AI to detect signs of coercion, remote access, and mule account patterns instantly.

**It's an invisible shield that only activates when danger is detected.**

## Key Features
For this hackathon, we built a real-time dashboard that lets you see exactly what the AI sees:
- **Risk Score (0-100)**
- **Device Trust Level**
- **Behavioral Biometrics**

## Interactive Demo

Experience the solution yourself. We have pre-configured 3 scenarios to demonstrate the system's logic.

**[Launch Live Demo](https://kbtg.sorawiss.com/)** *(Local: `npm run dev` and go to `/transfer`)*

### Demo Scenarios

Navigate to the **Transfer** menu. You will see three contacts representing different risk levels:

| User | Scenario | What Happens? |
| :--- | :--- | :--- |
| **อลิชา** <br>*(The Innocent User)* | ✅ **Safe** | **No Friction.** The transfer goes through instantly. This proves that security doesn't have to hurt UX. |
| **สมชาย** <br>*(The Scammer)* | ⛔ **High Risk** | **Blocked.** The system detects an **Active Call** and **Screen Sharing**. Providing immediate protection. |
| **วนิดา** <br>*(The Mule)* | ⚠️ **Medium Risk** | **Warning.** The system detects a **New Beneficiary** anomaly and warns the user to be careful. |



---
*Created for the KBTG Hackathon.*
