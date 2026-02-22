import { beforeEach, describe, expect, it, vi } from 'vitest'
import { getRandomDogImage } from '../services/dogService'

beforeEach(() => {
    global.fetch = vi.fn();
});

describe("dogService - getRandomDogImage", () => {

    // POSITIVE TEST

    it("returns image url and status from correct API response", async () => {
        const mockData = {
            "message": "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
            "status": "success"
        };

        (fetch as any).mockResolvedValue({
            ok: true,
            json: async () => mockData
        });

        const result = await getRandomDogImage();

        expect(result.imageUrl).toBe(mockData.message);
        expect(result.status).toBe("success");

        expect(fetch).toHaveBeenCalledOnce();
    });

    // NEGATIVE TEST

    it("throws an error when API returns non-o response", async () => {

        (fetch as any).mockResolvedValue({
            ok: false,
            status: 500
        });

        await expect(getRandomDogImage()).rejects.toThrow(
            "Failed to fetch dog image: Dog API returned status 500"
        );
    });
});