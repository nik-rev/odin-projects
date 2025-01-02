# Macro Search

This is just a very simple firefox extension that creates a search bar when we press <kbd>Alt</kbd> + <kbd>.</kbd>. In the search bar, we can enter anything then press <kbd>↵</kbd> and our query will be sent into google.

We can also use **macros**, which allow us to travel across the web faster.
For example, if you enter `.g`, it'll automatically send you to `github.com`!

You can also type in `?y <query>` and when you press <kbd>↵</kbd>, whatever `<query>` is, that is what will be searched for in YouTube

List of default macros:

### Instant Macros

| **Macro** | **Destination URL**                                | **Description**                                 |
|-----------|----------------------------------------------------|-------------------------------------------------|
| `.g`      | `https://github.com/`                              | Takes you to GitHub's homepage.                 |
| `.y`      | `https://youtube.com/`                             | Takes you to YouTube's homepage.                |
| `.p`      | `https://pass.proton.me`                           | Takes you to Proton Pass for password manager.  |
| `.m`      | `https://mail.proton.me`                           | Takes you to Proton Mail for email service.     |
| `.d`      | `https://drive.proton.me`                          | Takes you to Proton Drive for cloud storage.    |
| `.h`      | `https://news.ycombinator.com/`                    | Takes you to Hacker News.                       |
| `.a`      | `https://claude.ai/new`                            | Takes you to Claude AI's new conversation page. |

### Search Macros

| **Macro** | **Search URL Prefix**                              | **Description**                                 |
|-----------|----------------------------------------------------|-------------------------------------------------|
| `?y`      | `https://www.youtube.com/results?search_query=`     | Searches for a query on YouTube.                |
| `?o`      | `https://www.google.com/search?q=site%3Astackoverflow.com+` | Searches StackOverflow via Google.             |
| `?r`      | `https://github.com/search?type=repositories&q=`    | Searches repositories on GitHub.                |
| `?c`      | `https://github.com/search?type=code&q=`            | Searches code on GitHub.                        |

You can also change them in the extension's settings page.

### Running Locally

1. Clone this repository
1. Run `npm install -g web-ext`
1. Run `web-ext run`
