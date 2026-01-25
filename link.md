好的，我已经为您整理并完善了 WebPsy Labs 的首页布局文档。

针对您提供的合作伙伴信息，我补充了 **Mask Network (Mask.io)** 和 **SOON Network (Soo.network)** 的官方资料，并根据 Solana 风格的“合作伙伴滚动条”和“底部目录”逻辑进行了全英文标准化处理。

---

# WebPsy Labs: Homepage Layout & Content Specification

**Design Aesthetics:** High-fidelity, Solana-inspired dark mode, gradient highlights, and modular grid systems.

## 1. Top Navigation (Global Header)

* **Brand:** `WebPsy.net`
* **Menu:** `Events` | `Research` | `Community` | `Partners`
* **CTA:** `Connect / Join Us` (Link to Telegram)

---

## 2. Hero Section (Visual Impact)

* **Main Headline:** `The Growth-Hacking Agency Powered by MycoFi Protocol`
* **Description:** `At the intersection of cryptography, technology, academia, and the arts. We unite engineers, researchers, and artists to collaborate through a mycelial, network-like model.`
* **Buttons:** * [Primary] `View Concept Deck` (Link to Google Slides)
* [Secondary] `Follow on X` (Link to [X.com/SolarArk_2048](https://X.com/SolarArk_2048))



---

## 3. Partner Ecosystem (Infinite Scrolling Marquee)

* **Interaction:** A continuous horizontal scroll. High-priority "Strategic Partners" are placed at the beginning of the loop. Each logo is hyperlinked to its respective official site.
* **Order (Strategic First):**
1. **HashKey Group** (group.hashkey.com)
2. **Mask Network** (mask.io)
3. **SOON Network** (soo.network)
4. **EthStorage** (eth-store.w3eth.io)
5. **4seas** (4seas.xyz)
6. **LXDAO** (lxdao.io)
7. **Yellow Incubator** (yellowincubator.com)
8. **Lychee Lab** (lychee-lab.com)


* **Media Sequence (Follows Strategic):**
`Odaily` | `PANews` | `TechFlow` | `ChainCatcher` | `CoinRank`

---

## 4. Core Disciplines (Modular Grid)

* **Card A: Engineering**
* `Protocol & Full-Stack Engineering`
* *Building the backbone of the decentralized future.*


* **Card B: Strategy**
* `Global Growth Strategy`
* *Growth-hacking for global scale and local impact.*


* **Card C: Design**
* `Brand, Visual & Motion Design`
* *Crafting identities for the Solarpunk era.*



---

## 5. Event Calendar (The "Retreat" Series)

* **Layout:** Interactive cards with "Solarpunk" visual motifs.
* `Hacker Retreat`
* `CypherRave`
* `Solarpunk Retreat`
* `MycoPunk Meetup`



---

## 6. Strategic & Media Partner Directory (Detailed Index)

*This section serves as a link & asset library for developers.*

### **Strategic Partners**

| Name | Description | Link |
| --- | --- | --- |
| **HashKey** | A compliant end-to-end digital asset financial services group. | [group.hashkey.com](https://group.hashkey.com) |
| **Mask Network** | The portal to the new, open internet on top of existing social networks. | [mask.io](https://mask.io) |
| **SOON Network** | An Ethereum Layer 2 powered by a Decoupled Solana Virtual Machine (SVM). | [soo.network](https://soo.network) |
| **EthStorage** | Scaling Ethereum world computer storage via decentralized protocols. | [eth-store.w3eth.io](https://eth-store.w3eth.io/) |
| **4seas** | A global Web3 ecosystem platform for developer incubation and collaboration. | [4seas.xyz](https://4seas.xyz) |
| **LXDAO** | A DAO focused on Web3 investment, incubation, and ecosystem coordination. | [lxdao.io](http://lxdao.io/) |
| **Yellow Incubator** | A startup incubator providing capital, mentorship, and resources. | [yellowincubator.com](https://www.yellowincubator.com/) |
| **Lychee Lab** | A culture-driven Web3 growth and marketing studio. | [lychee-lab.com](https://www.lychee-lab.com/) |

### **Media Partners**

* **Odaily:** Leading Web3 news and market insight platform. ([odaily.news](https://www.odaily.news/en))
* **PANews:** Global blockchain news and research for the Chinese-speaking world. ([panewslab.com](http://panewslab.com/en))
* **TechFlow:** In-depth reporting and research on blockchain and macro trends. ([techflowpost.com](https://www.techflowpost.com/))
* **ChainCatcher:** Professional Web3 news and market analysis media. ([chaincatcher.com](http://chaincatcher.com/en))
* **CoinRank:** Cryptocurrency project rating and data analysis platform. ([coinrank.io](http://coinrank.io/))

---

## 7. Community & Research (Footer Sections)

* **Research:** `Articles & Insights` - Latest deep dives into socio-technical ecosystems.
* **Community:** `Member Showcase` - Highlighting the engineers, researchers, and artists of WebPsy Labs.
* **Social Connectivity:** * [Instagram: @uniclub_1968](https://www.google.com/search?q=https://www.instagram.com/uniclub_1968)
* [X: @SolarArk_2048](https://x.com/SolarArk_2048)
* [Ton/Telegram: Join Group](https://t.me/+hcJ97ZnmLVZhNDQ1)



---

### **针对最后两个合作伙伴的补充说明 (Dev Notes)：**

1. **Mask Network (Mask.io):** 官方 Logo 通常为蓝色方形 Mask 图标或圆形图标。
2. **SOON Network (Soo.network):** 这是目前非常热门的 SVM Layer 2。Logo 风格通常带有“SOON”字样或极简的圆形几何图形。
3. **Logo 维护建议:** 在开发滚动组件时，请统一使用 SVG 格式以保证在 Retina 屏幕下的清晰度（Solana 官网的标准做法）。对于已有的 Figma 和 Notion 链接中的 Logo，请 UI 导出为 `200px` 高度的透明背景 PNG 或 SVG。