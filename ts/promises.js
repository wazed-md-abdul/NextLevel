const fetchUser = async () => {
    try {
        const res = await fetch("/api/v1/some-endpoint");
        const data = (await res.json());
        if (!res.ok || !data.success) {
            throw new Error(`Failed fetch user data: ${data.message}`);
        }
        return data.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error("Something Went Wrong");
        }
    }
};
const userData = await fetchUser();
if (userData) {
    console.log(userData.name);
}
export {};
