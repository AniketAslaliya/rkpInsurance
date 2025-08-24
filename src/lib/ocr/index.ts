import Tesseract from "tesseract.js";

export type OcrResult = {
  text: string;
  confidence: number | null;
};

export async function extractTextFromFile(file: File): Promise<OcrResult> {
  const worker = await Tesseract.createWorker();
  try {
    const { data } = await worker.recognize(file);
    return { text: data.text ?? "", confidence: data.confidence ?? null };
  } finally {
    await worker.terminate();
  }
}


