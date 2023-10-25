import { PropsWithChildren } from '@kitajs/html'
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: '0 0% 100%' },
//     { media: '(prefers-color-scheme: dark)', color: '222.2 84% 4.9%' }
export const BaseHtml = ({ children }: PropsWithChildren) => `
<!DOCTYPE html> 
<html lang="en">  

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta content="#f3f4f6" media="(prefers-color-scheme: light)" name="theme-color" />
  <meta content="#1f2937" media="(prefers-color-scheme: dark)" name="theme-color" />
  <title>Yikes</title>
  <link rel="stylesheet" href="/tailwind.css">
  <script src="https://unpkg.com/htmx.org@1.9.6"></script>
  <script src="https://unpkg.com/htmx.org/dist/ext/preload.js"></script>
  <script>
    htmx.config.globalViewTransitions = true;
  </script>
</head>

${children}
`
