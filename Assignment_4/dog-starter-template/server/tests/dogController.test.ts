import { describe, expect, it, vi } from 'vitest'
import { getDogImage } from '../controllers/dogController';
import * as dogService from "../services/dogService";

describe("dogService - getDogImage", () => {

    // POSITIVE TEST

    it("returns success true and mocked dog data", async () => {
        const mockDogData = {
            "imageUrl": "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
            "status": "success"
        };

        vi.spyOn(dogService, "getRandomDogImage").mockResolvedValue(mockDogData);

        const json = vi.fn();
        const status = vi.fn(() => ({ json }));
        const res: any = { json, status };

        await getDogImage({} as any, res);

        expect(json).toHaveBeenCalledWith({
            success: true,
            data: mockDogData
        });
    });
});