---
id: algorithms
title: الگوریتم‌ها
slug: /algorithms
---

در این بخش با مفهوم الگوریتم و استانداردهای طراحی آن آشنا می‌شویم.

## الگوریتم چیست؟

الگوریتم روند مرحله‌به‌مرحله انجام یک کار است.

1. مطالعه را تمام می‌کنم
2. لپ‌تاپ را خاموش می‌کنم
3. یا سفارش می‌دهم یا غذا می‌پزم
4. می‌خورم

## ورودی و خروجی

ورودی سه عدد a و b و c و خروجی حاصل جمع

```text
Name: Sum of Three Numbers
Input: numbers a, b, c
Output: sum d

1. d ← a + b + c
2. Output d
```

## استانداردهای طراحی و شبه‌کد

انتساب با یکی از ← یا := یا = و مقایسه با < و > و = و !=

```text
Name: Maximum of Three
Input: numbers a, b, c
Output: max m

1. if a > b then t ← a else t ← b
2. if t > c then m ← t else m ← c
3. Output m
```

## Mermaid

```mermaid
flowchart TD
  A[Start] --> B{a > b?}
  B -->|Yes| C[a]
  B -->|No|  D[b]
  C --> E{t > c?}
  D --> E
  E -->|Yes| F[t]
  E -->|No|  G[c]
```

## Math

مساحت دایره: $A = \pi r^2$

## تمرین‌ها

1. شبه‌کد ارسال نامه را بنویسید
2. شبه‌کد میانگین سه عدد را بنویسید
