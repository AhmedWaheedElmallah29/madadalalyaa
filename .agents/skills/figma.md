# Pixel Perfect Figma Implementation

## Objective

The generated UI must match the provided Figma design exactly.

No creative interpretation is allowed.

No visual redesign is allowed.

No spacing adjustments are allowed.

No typography substitutions are allowed.

No color modifications are allowed.

No component restructuring is allowed.

The implementation goal is visual parity with the Figma file.

---

## Typography Rules

- Use the exact font family defined in Figma.
- Use the exact font weights.
- Use the exact font sizes.
- Use the exact line heights.
- Use the exact letter spacing values.

Never replace fonts with alternatives.

---

## Colors Rules

Use only colors extracted from Figma.

Never generate your own palette.

Never darken or lighten colors.

Never introduce additional colors.

---

## Spacing Rules

All spacing must come from Figma.

Match exactly:

- Margin
- Padding
- Gap
- Section spacing
- Component spacing

Do not normalize spacing.

Do not apply an 8px system unless it already exists in Figma.

---

## Layout Rules

Match:

- Widths
- Heights
- Grid structure
- Alignment
- Positioning
- RTL behavior

Do not center elements unless Figma centers them.

Do not use approximations.

---

## Components Rules

For every component:

- Button
- Card
- Badge
- Sidebar Item
- Search Input
- Statistics Cards
- Tree Node
- Icons

Match:

- Width
- Height
- Border
- Border Radius
- Shadow
- Internal Padding

exactly.

---

## Icon Rules

Use the same icon family shown in Figma.

Do not replace icons.

Maintain exact sizing.

Maintain exact stroke width.

---

## Responsive Rules

### Desktop

Desktop must match Figma exactly.

Pixel-perfect implementation required.

### Tablet

Adapt layout while preserving:

- Typography hierarchy
- Color palette
- Component appearance
- Visual identity

Avoid redesign.

### Mobile

Create responsive version based on:

- Existing desktop components
- Existing spacing scale
- Existing color system

Do not invent new sections.

Do not remove information.

Only reorganize layout when necessary.

---

## Tailwind Rules

Use Tailwind only.

Avoid arbitrary redesign decisions.

Prefer exact values from Figma:

Example:

w-[300px]
h-[90px]
rounded-[10px]
text-[14px]

instead of approximations.

---

## Quality Validation

Before final output verify:

- Font matches Figma
- Colors match Figma
- Widths match Figma
- Heights match Figma
- Border radius matches Figma
- Shadows match Figma
- RTL layout matches Figma
- No visual deviation exists

If any value is unknown, inspect Figma before generating code.

Never guess.
