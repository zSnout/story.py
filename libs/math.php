<?php
    $factorCache = array();
    
    function getFactors($number) {
        global $factorCache;
        
        $number = (float)$number;
        
        if ($number != floor($number)) {
            return array();
        }
        
        $number = (int)($number);
        
        if (array_key_exists($number,$factorCache)) {
            return $factorCache[$number];
        }
        
        $sqrt = (int)(floor(sqrt($number)));
        $factors = array();
        for ($i = 1;$i <= $sqrt;$i += 1) {
            if ($number / $i == floor($number / $i)) {
                $factors[] = $i;
                $factors[] = $number / $i;
            }
        }
        
        sort($factors);
        $factors = array_unique($factors);
        $factorCache[$number] = $factors;
        return $factors;
    }
    
    function countFactors($number) {
        global $factorCache;
        
        $number = (float)$number;
        
        if ($number != floor($number)) {
            return 0;
        }
        
        $number = (int)($number);
        if (array_key_exists($number,$factorCache)) {
            return count($factorCache[$number]);
        } else {
            return count(getFactors($number));
        }
    }
    
    function isPrime($number) {
        $number = (float)$number;
        
        if ($number != floor($number)) {
            return false;
        }
        
        $number = abs((int)($number));
        
        if ($number == 0 || $number == 1) {
            return false;
        }
        
        $factors = getFactors($number);
        if (count($factors) == 2) {
            if ($factors[0] == 1) {
                if ($factors[1] == $number) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    function primesTo($number) {
        $number = (float)($number);
        $primes = array();
        
        for ($i = 2;$i <= $number;$i++) {
            if (isPrime($i)) {
                $primes[] = $i;
            }
        }
        
        return $primes;
    }
    
    function primeTest($number) {
        $primes = primesTo($number);
        $squares = array();
        
        foreach ($primes as $prime) {
            $squares[] = fmod($prime * $prime,24);
        }
        
        return $squares;
    }
    
    function primePairsTo($number) {
        $primes = primesTo($number);
        $pairs = array();
        
        for ($i = 0;$i < count($primes);$i++) {
            if ($primes[$i] == $primes[$i + 1] - 2) {
                $pairs[] = $primes[$i];
                $pairs[] = $primes[$i + 1];
            }
        }
        
        return $pairs;
    }
    
    function primePairsAsString($number) {
        $primes = primesTo($number);
        $pairs = array();
        
        for ($i = 0;$i < count($primes);$i++) {
            if ($primes[$i] == $primes[$i + 1] - 2) {
                $pairs[] = $primes[$i] . "," . $primes[$i + 1];
            }
        }
        
        return implode("\n",$pairs);
    }
    
    function persistence($number,$start = 1) {
        $number = abs((int)$number);
        if (strlen("$number") == 1) {
            return $start;
        }
        
        $digits = str_split("$number");
        $product = 1;
        foreach ($digits as $digit) {
            $product *= (int)$digit;
        }
        
        return persistence($product,$start + 1);
    }
    
    function isHCN($number) {
        $number = (int)$number;
        $me = countFactors($number);
        
        for ($i = 0;$i < $number;$i++) {
            if (countFactors($i) >= $me) {
                return false;
            }
        }
        
        return true;
    }
    
    function hcnTo($number) {
        $number = (int)$number;
        $array = array();
        
        for ($i = 0;$i <= $number;$i++) {
            if (isHCN($i)) {
                $array[] = $i;
            }
        }
        
        return $array;
    }
    
    function hcnAsString($number) {
        $number = (int)$number;
        $text = "";
        
        for ($i = 0;$i <= $number;$i++) {
            if (isHCN($i)) {
                $text .= "$i (" . countFactors($i) . " factors)\n";
            }
        }
        
        return substr($text,0,strlen($text) - 1);
    }
    
    function pythagorean($m,$n) {
        return array($m * $m - $n * $n,2 * $m * $n,$m * $m + $n * $n);
    }
