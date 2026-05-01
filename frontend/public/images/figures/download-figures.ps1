# Download anime figure images
$figures = @(
    @{name="figure1.jpg"; url="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop"},
    @{name="figure2.jpg"; url="https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=600&fit=crop"},
    @{name="figure3.jpg"; url="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=400&h=600&fit=crop"},
    @{name="figure4.jpg"; url="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=600&fit=crop"},
    @{name="figure5.jpg"; url="https://images.unsplash.com/photo-1606856138230-aa0159ad23cf?w=400&h=600&fit=crop"},
    @{name="figure6.jpg"; url="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=600&fit=crop"},
    @{name="figure7.jpg"; url="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop"},
    @{name="figure8.jpg"; url="https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=600&fit=crop"},
    @{name="figure9.jpg"; url="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=400&h=600&fit=crop"},
    @{name="figure10.jpg"; url="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=600&fit=crop"},
    @{name="figure11.jpg"; url="https://images.unsplash.com/photo-1606856138230-aa0159ad23cf?w=400&h=600&fit=crop"}
)

foreach ($fig in $figures) {
    try {
        Write-Host "Downloading $($fig.name)..."
        Invoke-WebRequest -Uri $fig.url -OutFile $fig.name -UseBasicParsing
        Write-Host "Downloaded $($fig.name)" -ForegroundColor Green
    } catch {
        Write-Host "Failed to download $($fig.name)" -ForegroundColor Red
    }
}

Write-Host "Done downloading figure images" -ForegroundColor Cyan
