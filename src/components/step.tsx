export interface Step {
  name: string;
  description: string;
  images?: string[]; // Changed to an array of strings
  timer?: {
    duration: number;
  };
}
export default Step;
