import { UserProfileTypes } from "../types";

class Auth {
	/**
	 * De-authenticate a user.
	 * @description - Removes a token from localStorage.
	 */
	static deAuthenticateUser(): void {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	}

	/**
	 * Save current user
	 * @description - Save a user data and token string in local storage
	 */
	static storeUser(user: UserProfileTypes): void {
		localStorage.setItem("user", JSON.stringify(user));
	}

	/**
	 * Authenticate a user
	 * @description - Save user data and token string in local storage
	 */
	static authenticateUser(data: any): void {
		localStorage.setItem("token", data.data.access_token);
		localStorage.setItem("user", JSON.stringify(data.data.user));
	}

	/**
	 * Check if a user is authenticated
	 * @returns {boolean}
	 * @description - check if a token is saved in Local Storage
	 */
	static isUserAuthenticated(): boolean {
		const token = localStorage.getItem("token");
		if (!token) {
			return false;
		}
		return true;
	}

	/**
	 * Retrieve token from local storage
	 * @returns {boolean}
	 */
	static getToken(): string | boolean {
		const token = localStorage.getItem("token");
		if (token) {
			return token;
		} else {
			return false;
		}
	}
}

export default Auth;
