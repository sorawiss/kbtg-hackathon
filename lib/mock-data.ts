export interface FraudCheck {
    status: 'SAFE' | 'WARNING' | 'CRITICAL';
    description: string;
    value: string;
}

export interface Contact {
    name: string;
    accountNumber: string;
    bank: string;
    isScammer: boolean;
    riskScore: number; // 0-100
    checks: {
        activeCall: FraudCheck;
        screenSharing: FraudCheck;
        newBeneficiary: FraudCheck;
        velocity: FraudCheck;
        balanceDepletion: FraudCheck;
        memoAnalysis: FraudCheck;
        deviceTrust: FraudCheck;
        duration: FraudCheck;
        location: FraudCheck;
    };
}

export const CONTACTS_DATA: Record<string, Contact> = {
    // Safe User
    "อลิชา": {
        name: "อลิชา",
        accountNumber: "123-4-56789-0",
        bank: "Kasikornbank",
        isScammer: false,
        riskScore: 5,
        checks: {
            activeCall: { status: 'SAFE', description: 'No active call detected', value: 'None' },
            screenSharing: { status: 'SAFE', description: 'No screen sharing detected', value: 'Off' },
            newBeneficiary: { status: 'SAFE', description: 'Existing beneficiary (> 1 year)', value: 'Trusted' },
            velocity: { status: 'SAFE', description: 'Normal transaction volume', value: 'Low' },
            balanceDepletion: { status: 'SAFE', description: 'Healthy balance remaining', value: 'Normal' },
            memoAnalysis: { status: 'SAFE', description: 'Standard memo pattern', value: 'Expenses' },
            deviceTrust: { status: 'SAFE', description: 'Known device', value: 'Trusted' },
            duration: { status: 'SAFE', description: 'Normal interaction time', value: '45s' },
            location: { status: 'SAFE', description: 'Home location', value: 'Bangkok' },
        }
    },
    // Scammer - High Risk
    "สมชาย": {
        name: "สมชาย",
        accountNumber: "987-6-54321-0",
        bank: "SCB",
        isScammer: true,
        riskScore: 95,
        checks: {
            activeCall: { status: 'CRITICAL', description: 'Active call with unknown number', value: 'On Call (15m)' },
            screenSharing: { status: 'CRITICAL', description: 'Screen sharing active', value: 'Active' },
            newBeneficiary: { status: 'WARNING', description: 'Added 5 mins ago', value: 'New' },
            velocity: { status: 'CRITICAL', description: 'High frequency transfers', value: 'High' },
            balanceDepletion: { status: 'WARNING', description: '90% of balance being transferred', value: 'High' },
            memoAnalysis: { status: 'WARNING', description: 'Urgent keywords detected', value: 'Urgent' },
            deviceTrust: { status: 'SAFE', description: 'Known device', value: 'Trusted' },
            duration: { status: 'CRITICAL', description: 'Unusually long session', value: '20m' },
            location: { status: 'SAFE', description: 'Home location', value: 'Bangkok' },
        }
    },
    // Potential Mule - Medium Risk
    "วนิดา": {
        name: "วนิดา",
        accountNumber: "555-4-33322-1",
        bank: "Bangkok Bank",
        isScammer: true, // Treated as risky
        riskScore: 65,
        checks: {
            activeCall: { status: 'SAFE', description: 'No active call', value: 'None' },
            screenSharing: { status: 'SAFE', description: 'No screen sharing', value: 'Off' },
            newBeneficiary: { status: 'WARNING', description: 'Added 1 day ago', value: 'Recent' },
            velocity: { status: 'WARNING', description: 'Increasing transaction volume', value: 'Medium' },
            balanceDepletion: { status: 'SAFE', description: 'Normal balance usage', value: 'Normal' },
            memoAnalysis: { status: 'SAFE', description: 'No keywords', value: '-' },
            deviceTrust: { status: 'SAFE', description: 'Known device', value: 'Trusted' },
            duration: { status: 'WARNING', description: 'Quick navigation', value: '10s' },
            location: { status: 'WARNING', description: 'New location detected', value: 'Chiang Mai' },
        }
    },
    // Another Safe User
    "พี่ธราย": {
        name: "พี่ธราย",
        accountNumber: "444-5-66677-8",
        bank: "Krungthai",
        isScammer: false,
        riskScore: 10,
        checks: {
            activeCall: { status: 'SAFE', description: 'No active call', value: 'None' },
            screenSharing: { status: 'SAFE', description: 'No screen sharing', value: 'Off' },
            newBeneficiary: { status: 'SAFE', description: 'Added 3 years ago', value: 'Trusted' },
            velocity: { status: 'SAFE', description: 'Low transaction frequency', value: 'Low' },
            balanceDepletion: { status: 'SAFE', description: 'Normal', value: 'Normal' },
            memoAnalysis: { status: 'SAFE', description: 'Normal', value: 'Rent' },
            deviceTrust: { status: 'SAFE', description: 'Known device', value: 'Trusted' },
            duration: { status: 'SAFE', description: 'Normal', value: '30s' },
            location: { status: 'SAFE', description: 'Office', value: 'Silom' },
        }
    }
};
