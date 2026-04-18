# API Verification Script for Portfolio Backend
$baseUrl = "http://localhost:5000/api"

Write-Host "--- Testing Health Check ---" -ForegroundColor Cyan
Invoke-RestMethod -Uri "http://localhost:5000/" | ConvertTo-Json

Write-Host "`n--- Testing Skills GET ---" -ForegroundColor Cyan
Invoke-RestMethod -Uri "$baseUrl/skills" | Select-Object -ExpandProperty data | Select-Object -First 3 | Format-Table

Write-Host "`n--- Testing Projects GET ---" -ForegroundColor Cyan
Invoke-RestMethod -Uri "$baseUrl/projects" | Select-Object -ExpandProperty data | Select-Object -First 2 | Format-Table

Write-Host "`n--- Testing Blog GET (Paginated) ---" -ForegroundColor Cyan
$blog = Invoke-RestMethod -Uri "$baseUrl/blog?page=1&limit=2"
$blog.pagination | ConvertTo-Json
$blog.data | Select-Object title, category | Format-Table

Write-Host "`n--- Testing Contact POST ---" -ForegroundColor Cyan
$body = @{
    name = "Test User"
    email = "visitor@example.com"
    subject = "Test Message"
    message = "This is a verify script payload."
}
Invoke-RestMethod -Uri "$baseUrl/contact" -Method Post -Body ($body | ConvertTo-Json) -ContentType "application/json" | ConvertTo-Json

Write-Host "`n--- Verification Complete ---" -ForegroundColor Green
