// model/service.model.ts
export interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl?: string; // Making this optional since the content doesn't show images
  category?: string; // Added for "Easy Printing Setup" vs "Smart Printing Setup"
}