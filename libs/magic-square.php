<?php
    class MagicSquare {
        static function pad($array) {
            $len = 0;
            
            foreach ($array as $i => $sub) {
                foreach ($sub as $j => $item) {
                    $array[$i][$j] = "$item";
                    $len = max($len,strlen("$item"));
                }
            }
            
            foreach ($array as $i => $sub) {
                foreach ($sub as $j => $item) {
                    $array[$i][$j] = str_pad($item,$len);
                }
                
                $array[$i] = implode("  ",$array[$i]);
            }
            
            $array = implode("\n",$array);
            return $array;
        }
        static function padHTML($array) {
            foreach ($array as $i => $sub) {
                $array[$i] = implode("",$sub);
            }
            
            $array = "<table><tr>" . implode("</tr><tr>",$array) . "</tr>";
            return $array;
        }
        static function sum($array) {
            $h = count($array);
            $array[] = array_pad(array(),count($array[0]),"");
            $array[] = array_pad(array(),count($array[0]),"");
            
            for ($i = 0;$i < $h;$i++) {
                $array[$i][] = "";
                $array[$i][] = array_sum($array[$i]);
                $array[$h + 1][$i] = array_sum(array_column($array,$i));
            }
            
            return $array;
        }
        static function create($size) {
            $square = new MagicSquare($size);
            return $square->square();
        }
        
        private $size;
        private $i;
        private $j;
        private $square;
        private $html;
        
        function __construct($size,$html = false) {
            $size = (int)$size;
            if ($size <= 2) {
                throw "The integer form of \$size must be greater than 2. It was $size.";
            } else {
                $this->size = $size;
                $this->square = array_pad(array(),$size,array_pad(array(),$size,null));
            }
            
            if ($html) {
                $this->html = true;
            } else {
                $this->html = false;
            }
        }
        
        private function oddCheck() {
            if ($this->i == -1) {
                $this->i = $this->size - 1;
            } else if ($this->i == $this->size) {
                $this->i = 0;
            }
            if ($this->j == -1) {
                $this->j = $this->size - 1;
            } else if ($this->j == $this->size) {
                $this->j = 0;
            }
            
            return array($this->i,$this->j);
        }
        
        protected function oddSquare() {
            $size = $this->size;
            $n = 0;
            $this->i = 0;
            $this->j = ($this->size - 1) / 2;
            
            for ($n = 1;$n <= $size * $size;$n++) {
                $c = $this->square[$this->i][$this->j];
                
                $hsl = $n / ($size * $size);
                $hsl = floor(360 * $hsl);
                $hsl = str_pad("$hsl",3);
                
                if ($c == null) {
                    if ($this->html) {
                        $this->square[$this->i][$this->j] = "<td style='background: hsl($hsl,100%,80%)'>" . $n . "</td>";
                    } else {
                        $this->square[$this->i][$this->j] = $n;
                    }
                    
                    $this->i--;$this->j++;
                    $this->oddCheck();
                } else {
                    $this->i++;$this->j--;
                    $this->oddCheck();
                    $this->i++;
                    $this->oddCheck();
                    
                    if ($this->html) {
                        $this->square[$this->i][$this->j] = "<td style='background: hsl($hsl,100%,80%)'>" . $n . "</td>";
                    } else {
                        $this->square[$this->i][$this->j] = $n;
                    }
                    
                    $this->i--;$this->j++;
                    $this->oddCheck();
                }
            }
            
            return $this->square;
        }
        protected function singlyEvenSquare() {
            $new = $this->square;
            $sz = $this->size / 2;
            $base = MagicSquare::create($sz);
            $l = $sz / 2 - 0.5;
            $r = $sz / 2 - 1.5;
            
            foreach ($base as $i => $sub) {
                foreach ($sub as $j => $item) {
                    if ($this->html) {
                        $this->square[$i][$j] =             "<td style='background: #ffc0c0'>" . $item . "</td>";
                        $this->square[$i + $sz][$j + $sz] = "<td style='background: #ffffc0'>" . ($item +     $sz * $sz) . "</td>";
                        $this->square[$i][$j + $sz] =       "<td style='background: #c0ffc0'>" . ($item + 2 * $sz * $sz) . "</td>";
                        $this->square[$i + $sz][$j] =       "<td style='background: #c0c0ff'>" . ($item + 3 * $sz * $sz) . "</td>";
                    } else {
                        $this->square[$i][$j] =             $item;
                        $this->square[$i + $sz][$j + $sz] = $item +     $sz * $sz;
                        $this->square[$i][$j + $sz] =       $item + 2 * $sz * $sz;
                        $this->square[$i + $sz][$j] =       $item + 3 * $sz * $sz;
                    }
                }
            }
            
            foreach ($this->square as $i => $sub) {
                foreach ($sub as $j => $item) {
                    if (
                        (($i == $l or $i == $l + $sz) and (1 <= $j and $j <= $l)) or
                        (!($i == $l or $i == $l + $sz) and $j < $l) or
                        ($j >= 2 * $sz - $r)
                    ) {
                        if ($i < $sz) {
                            $new[$i + $sz][$j] = $item;
                        } else {
                            $new[$i - $sz][$j] = $item;
                        }
                    } else {
                        $new[$i][$j] = $item;
                    }
                }
            }
            $this->square = $new;
            
            return $this->square;
        }
        protected function doublyEvenSquare() {
            $f = 0;
            $b = $this->size * $this->size + 1;
            $l = $this->size / 4 - 1;
            $r = $this->size / 4 * 3;
            
            for ($i = 0;$i < $this->size;$i++) {
                for ($j = 0;$j < $this->size;$j++) {
                    $f++;
                    $b--;
                    
                    if (
                        ($l < $i and $i < $r and $l < $j and $j < $r) or
                        ($i <= $l and $j <= $l) or
                        ($i <= $l and $j >= $r) or
                        ($i >= $r and $j <= $l) or
                        ($i >= $r and $j >= $r)
                    ) {
                        if ($this->html) {
                            $this->square[$i][$j] = "<td style='background: #ffe0c0'>$f</td>";
                        } else {
                            $this->square[$i][$j] = $f;
                        }
                    } else {
                        if ($this->html) {
                            $this->square[$i][$j] = "<td style='background: #e0b0ff'>$b</td>";
                        } else {
                            $this->square[$i][$j] = $b;
                        }
                    }
                }
            }
            
            return $this->square;
        }
        
        function square() {
            if (fmod($this->size,4) == 0) {
                return $this->doublyEvenSquare();
            } elseif (fmod($this->size,2) == 0) {
                return $this->singlyEvenSquare();
            } else {
                return $this->oddSquare();
            }
        }
    }
    
    if (array_key_exists("html",$_GET)) {
        $square = new MagicSquare($_GET["size"],true);
        echo "<pre>" . MagicSquare::padHTML($square->square()) . "</pre>";
    } elseif (array_key_exists("json",$_GET)) {
        $square = new MagicSquare($_GET["size"]);
        echo json_encode($square->square());
    } else {
        $square = new MagicSquare($_GET["size"]);
        echo "<pre>" . MagicSquare::pad(MagicSquare::sum($square->square())) . "</pre>";
    }
