import * as Yup from "yup";
const NO_DOUBLE_LINE_SPACING = "no-double-line-spacing";

export const createPostSchemaValidator = Yup.object().shape({
	text: Yup.string()
		.test(
			NO_DOUBLE_LINE_SPACING,
			"Double line spacing is not allowed",
			(value) => !value?.includes("\n\n")
		)
		.min(8, "Must be 8 characters or greater")
		.max(1000, "Must be 1000 characters or less")
		.required("Description is required to create a post"),
});
