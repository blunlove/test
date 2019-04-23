doubleMe x = x + x + x
doubleUs x y = doubleMe x + doubleMe y
doubleSmallNumber x = if x > 100 then x else x * 2
doubleSmallNumber' x = (if x > 100 then x else x * 2) + 1
conanO'Brien = "It's a-me, Conan O'Brien!"
boomBangs xs = [if x < 10 then "BOOM!" else "BANG!" | x <- xs, odd x]
length' xs = sum [1 | _ <- xs]
removeNonUppercase :: String -> String
removeNonUppercase st = [c | c <- st, c `elem` ['A'..'Z']]

circumference :: Float -> Float
circumference r = 2 * pi * r
circumference' :: Double -> Double
circumference' r = 2 * pi * r
-- lucky :: (Integral a) => a -> String
lucky 1 = "One!"
lucky 2 = "Two!"
lucky 3 = "Three!"
lucky 4 = "Four!"
lucky 5 = "Five!"
lucky x = "Not between 1 and 5"

factorial :: (Integral a) => a -> a
factorial 0 = 1
factorial n = n * factorial (n - 1)