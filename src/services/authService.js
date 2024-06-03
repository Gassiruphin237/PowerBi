const API_ENDPOINT = 'YOUR_API_ENDPOINT';

export async function login(userData) {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }

        return data;
    } catch (error) {
        throw error;
    }
}

export const sendOtp = async (phoneNumber) => {
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber })
    });

    if (!response.ok) {
        throw new Error('Failed to send OTP');
    }

    return response.json();
};
