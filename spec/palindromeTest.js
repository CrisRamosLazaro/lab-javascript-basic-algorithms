describe('Palindrome Checker', () => {
    it('should return true for "A man, a plan, a canal, Panama!"', () => {
        expect(checkPalindrome("A man, a plan, a canal, Panama!")).toBe(true)
    })

    it('should return true for "Amor, Roma"', () => {
        expect(checkPalindrome("Amor, Roma")).toBe(true)
    })

    it('should return true for "race car"', () => {
        expect(checkPalindrome("race car")).toBe(true)
    })

    it('should return true for "stack cats"', () => {
        expect(checkPalindrome("stack cats")).toBe(true)
    })

    it('should return true for "step on no pets"', () => {
        expect(checkPalindrome("step on no pets")).toBe(true)
    })

    it('should return true for "taco cat"', () => {
        expect(checkPalindrome("taco cat")).toBe(true)
    })

    it('should return true for "put it up"', () => {
        expect(checkPalindrome("put it up")).toBe(true)
    })

    it('should return true for "Was it a car or a cat I saw?"', () => {
        expect(checkPalindrome("Was it a car or a cat I saw?")).toBe(true)
    })

    it('should return true for "No \'x\' in Nixon"', () => {
        expect(checkPalindrome("No 'x' in Nixon")).toBe(true)
    })
})
