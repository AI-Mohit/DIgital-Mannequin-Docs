---
id: catalogue-upload
title: Catalogue Upload
sidebar_position: 1
---

# Catalogue Upload

The catalogue is the set of products customers can dress the mannequin with. Each product needs an image and basic metadata.

## Image requirements

| Property | Requirement |
|---|---|
| Format | JPG or PNG |
| Minimum size | 800 x 800px |
| Background | Any (rembg removes it automatically) |
| File size | Under 5MB per image |

## Upload process

1. Go to your Supabase dashboard
2. Open the **Storage** section
3. Navigate to the `products` bucket
4. Upload your product images

Once uploaded, rembg processes each image automatically and removes the background within 30 seconds.

## Adding product metadata

After uploading images, add product details in the `products` table:

| Field | Description |
|---|---|
| `name` | Product display name |
| `category` | `top`, `bottom`, `footwear`, or `accessory` |
| `image_url` | URL from Supabase storage |
| `price` | Optional display price |
| `in_stock` | Boolean — controls visibility in PWA |

:::warning
Products with `in_stock` set to `false` will not appear in the PWA even if the image is uploaded.
:::