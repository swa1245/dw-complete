# Icons Directory

This directory contains all the SVG icons used throughout the DW Innovation website.

## Directory Structure

```
/icons
  /frontend      - Frontend technology icons
  /backend       - Backend technology icons
  /database      - Database technology icons
```

## Usage Guidelines

1. All icons should be in SVG format for optimal quality and performance
2. Keep icons simple and consistent in style
3. Optimize SVGs before adding them to the repository
4. Use meaningful filenames that reflect the technology they represent

## Icon Categories

### Frontend
- react.svg
- next.svg
- vue.svg
- angular.svg
- tailwind.svg

### Backend
- node.svg
- python.svg
- php.svg
- dotnet.svg

### Database
- mongodb.svg
- postgresql.svg
- mysql.svg

## Best Practices
1. Use appropriate viewBox settings
2. Remove unnecessary metadata
3. Optimize paths
4. Use consistent colors or make them customizable via CSS

## Using the TechIcon Component

The `TechIcon` component is available for displaying technology icons with built-in animations and hover effects. Here's how to use it:

```jsx
import TechIcon from '@/components/TechIcon';

// Basic usage
<TechIcon 
  icon="/icons/frontend/react.svg"
  name="React"
/>

// With custom size
<TechIcon 
  icon="/icons/backend/python.svg"
  name="Python"
  className="w-10 h-10" // Override default size
/>
```

Features:
- Lazy loading for better performance
- Smooth hover animations
- Consistent sizing and styling
- Built-in error handling for missing icons
- Automatic alt text generation

For more examples and customization options, check the `TechIcon` component documentation.
