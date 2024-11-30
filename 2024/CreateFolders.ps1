$path = "C:\AdventOfCode\AdventOfCode\2024" 

1..25 | ForEach-Object {
    New-Item -Path $path -Name "Day$_" -ItemType Directory
}