// Get role from user by email

export const getRole = async email => {
    const response = await fetch(`https://lingoz-server-side.vercel.app/users/${email}`);
    const user = await response.json();
    return user.role;
}