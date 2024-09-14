import { FormikValues } from "formik";
import { ListingType } from "../Screens/ItemsScreen/types";
import apiClient from "./config";

export const getUserListing = async (): Promise<ListingType[]> => {
  const { data, ok, problem } = await apiClient.get("/listings");

  if (!ok) {
    throw new Error(problem);
  }
  return data as ListingType[];
  // throw new Error('error occurred')
};

export const postUserListing = async (listing: any) => {
  const formData = new FormData();
  formData.append("title", listing.title);
  formData.append("price", listing.price);
  formData.append("categoryId", listing.categoryId);
  formData.append("description", listing.description);

  listing.images.forEach((image: string, ind: number) => {
    formData.append("images", {
      name: "image" + ind,
      uri: image,
      type: "image/jpeg",
    });
  });
  if (listing.location) {
    formData.append("location", JSON.stringify(listing.location));
  }

  const { data, ok } = await apiClient.post("/listings", formData, {
    onUploadProgress: (progressEvent) => console.log(progressEvent),
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (!ok) {
    throw new Error("sorry couldn't upload data");
  }
  return data;
};

export const registerUser = ({ email, password, name }: FormikValues) =>
  apiClient.post("/users", { email, password, name });

export const loginUser = (email: string, password: string) =>
  apiClient.post("/auth", { email, password });

export const updatePushNotificationToken = (token: string) =>
  apiClient.post("/expoPushTokens", { token });
