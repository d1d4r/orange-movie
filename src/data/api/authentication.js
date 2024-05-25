import api from "@/lib/axios";

export const CreateRequestToken = async () => {
  try {
    const { data } = api.get("/authentication/token/new");
    return data;
  } catch (error) {
    throw new Error(error);
    console.log("🚀 ~ CreateRequestToken ~ error:", error);
  }
};
