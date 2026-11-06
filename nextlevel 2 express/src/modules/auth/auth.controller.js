import AuthService from "./auth.services";
class AuthController {
    static loginUser = async (req, res) => {
        const payload = req.body;
        try {
            const result = await AuthService.loginUserIntoDB(payload);
            res.cookie("refreshToken", result.refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
            });
            res.status(200).json({
                message: "User logged in successfully",
                success: true,
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                message: error?.message || "Something went wrong",
                success: false,
            });
        }
    };
}
export default AuthController;
