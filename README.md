# AI Doomer Terminal

```
╔════════════════════════════════════════════════════════════════════════════════╗
║                                                                                ║
║   ██████╗  ██████╗  ██████╗ ███╗   ███╗███████╗██████╗                        ║
║   ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║██╔════╝██╔══██╗                       ║
║   ██║  ██║██║   ██║██║   ██║██╔████╔██║█████╗  ██████╔╝                       ║
║   ██║  ██║██║   ██║██║   ██║██║╚██╔╝██║██╔══╝  ██╔══██╗                       ║
║   ██████╔╝╚██████╔╝╚██████╔╝██║ ╚═╝ ██║███████╗██║  ██║                       ║
║   ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝                       ║
║                                                                                ║
║                      TERMINAL VERDICT SYSTEM v1.0.0                            ║
║                      REAL STATS. ZERO HYPE. PURE DOOM.                         ║
║                                                                                ║
╚════════════════════════════════════════════════════════════════════════════════╝

    [SYSTEM ONLINE]  [SENTIMENT ANALYZER ACTIVE]  [MARKET DATA STREAM CONNECTED]
    
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │ WARNING: INFORMATIONAL OUTPUT ONLY. NOT FINANCIAL ADVICE.                   │
    │ ALL VERDICTS GENERATED FROM LIVE MARKET DATA VIA LLM ANALYSIS.              │
    └─────────────────────────────────────────────────────────────────────────────┘
```

<div align="center">
  <img src="aidoom.png" width="220" />
</div>

## OVERVIEW

AI Doomer Terminal is a minimalist web-based terminal interface that analyzes cryptocurrency tokens and returns cold, data-driven doom verdicts. No speculation. No hopium. Just raw market statistics processed through an LLM to generate terminal-style readouts.

The system fetches live token data from DexScreener, extracts key metrics (price change, volume delta, liquidity movement), and feeds them to an AI model that returns structured terminal output with a doom verdict classification.

## CORE ARCHITECTURE

```
┌─────────────────┐
│  USER INPUT     │  Contract Address / DexScreener URL
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  DEXSCREENER    │  Fetch token metadata + market stats
│  API LAYER      │  (price_change_24h, volume_change_24h, liquidity_delta)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  LLM PROCESSOR  │  OpenAI GPT-4 (structured output mode)
│  (GPT-4)        │  Input: Raw stats only
└────────┬────────┘  Output: Formatted terminal verdict
         │
         ▼
┌─────────────────┐
│  TERMINAL UI    │  Render verdict in terminal aesthetic
│  RENDERER       │  Monospace font, green-on-black, ASCII borders
└─────────────────┘
```

## BEHAVIORAL CONTRACT

### INPUT REQUIREMENTS
- Token contract address (Ethereum, Solana, BSC, etc.)
- OR DexScreener profile link

### DATA PIPELINE
1. Query DexScreener API for token pair data
2. Extract only the following fields:
   - `priceChange.h24` (24-hour price change percentage)
   - `volume.h24` (24-hour volume in USD)
   - `liquidity.usd` (current liquidity pool size)
   - `txns.h24` (transaction count, buys + sells)
3. Calculate derived metrics:
   - Volume change rate (current vs. previous period)
   - Liquidity change rate (current vs. baseline)
4. Send ONLY these numeric stats to LLM (no token name, no social links, no descriptions)

### LLM CONSTRAINTS
The language model receives a strict system prompt that enforces:
- Use only provided statistics
- No external knowledge injection
- No price predictions or financial advice
- Output must match exact terminal format
- Readout must be 2-4 lines maximum
- Tone: cold, clinical, terminal-native

### OUTPUT FORMAT SPECIFICATION

```
ASSET        : [TOKEN_SYMBOL]
VERDICT      : [LOW | MID | HIGH | ZERO]
WINDOW       : 24H
─────────────────────────────────────────
PRICE_CHG    : [±X.XX%]
VOL_CHG      : [±X.XX%]
LIQ_CHG      : [±X.XX%]
TX_COUNT     : [XXXXX]
─────────────────────────────────────────
READOUT      :
[Line 1: Blunt market observation]
[Line 2: Volume or liquidity note]
[Line 3-4: Terminal-style conclusion]
```

### VERDICT CLASSIFICATION LOGIC

| VERDICT | CRITERIA |
|---------|----------|
| **ZERO** | Price down >50% in 24h, volume collapse >80%, or liquidity drain >70% |
| **HIGH** | Price down 20-50%, volume drop 40-80%, sustained negative momentum |
| **MID** | Price down 5-20%, volume decline 10-40%, mixed signals |
| **LOW** | Price flat or up, volume stable or increasing, no red flags |

## QUICK START

```bash
# Clone repository
git clone https://github.com/yourusername/ai-doomer-terminal.git
cd ai-doomer-terminal

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Add your OpenAI API key to .env

# Start development server
npm run dev
```

Navigate to `http://localhost:3000` and enter a token address.

## ENVIRONMENT CONFIGURATION

Create a `.env.local` file in the project root:

```bash
# OpenAI API Configuration
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional: Model override (default: gpt-4-turbo-preview)
OPENAI_MODEL=gpt-4-turbo-preview

# Optional: DexScreener API rate limit (requests per minute)
DEXSCREENER_RATE_LIMIT=30
```

### API Key Setup
1. Obtain an OpenAI API key from https://platform.openai.com/api-keys
2. Ensure your account has access to GPT-4 models
3. Add the key to your `.env.local` file
4. Never commit `.env.local` to version control

## TECH STACK

```
┌──────────────────────────────────────────┐
│  FRONTEND                                │
├──────────────────────────────────────────┤
│  Next.js 14          App Router          │
│  TypeScript          Type safety         │
│  Tailwind CSS        Terminal styling    │
│  React               Component layer     │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  BACKEND / API                           │
├──────────────────────────────────────────┤
│  Next.js API Routes  Serverless functions│
│  OpenAI API          LLM processing      │
│  DexScreener API     Market data source  │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  DEPENDENCIES                            │
├──────────────────────────────────────────┤
│  openai              ^4.28.0             │
│  zod                 ^3.22.4             │
│  axios               ^1.6.7              │
└──────────────────────────────────────────┘
```

## PROJECT STRUCTURE

```
ai-doomer-terminal/
├── app/
│   ├── api/
│   │   ├── analyze/
│   │   │   └── route.ts          # Main analysis endpoint
│   │   └── dexscreener/
│   │       └── route.ts          # DexScreener proxy
│   ├── components/
│   │   ├── Terminal.tsx          # Main terminal UI component
│   │   ├── VerdictDisplay.tsx    # Formatted output renderer
│   │   └── InputField.tsx        # Token address input
│   ├── lib/
│   │   ├── dexscreener.ts        # API client for DexScreener
│   │   ├── openai.ts             # OpenAI client configuration
│   │   ├── prompts.ts            # System prompts for LLM
│   │   └── types.ts              # TypeScript definitions
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/
│   └── aidoom.png                # Logo asset
├── .env.example                  # Environment template
├── .env.local                    # Local secrets (gitignored)
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies
```

## OUTPUT CONTRACT

Every analysis returns a structured response matching this format:

```
╔════════════════════════════════════════════════════════════╗
║  AI DOOMER TERMINAL - ANALYSIS COMPLETE                   ║
╚════════════════════════════════════════════════════════════╝

ASSET        : PEPE
VERDICT      : HIGH
WINDOW       : 24H
─────────────────────────────────────────────────────────────
PRICE_CHG    : -23.4%
VOL_CHG      : -67.2%
LIQ_CHG      : -12.8%
TX_COUNT     : 45293
─────────────────────────────────────────────────────────────
READOUT      :
Price collapsed through support. Volume evaporated.
Liquidity bleeding but not critical yet.
Momentum dead. No recovery signal detected.
Exit liquidity phase probable.

[ANALYSIS TIMESTAMP: 2024-02-05T14:23:17Z]
```

### Field Definitions

| FIELD | TYPE | DESCRIPTION |
|-------|------|-------------|
| `ASSET` | string | Token symbol (max 10 chars) |
| `VERDICT` | enum | Doom classification (LOW/MID/HIGH/ZERO) |
| `WINDOW` | string | Analysis timeframe (always "24H") |
| `PRICE_CHG` | float | 24-hour price change percentage |
| `VOL_CHG` | float | 24-hour volume change percentage |
| `LIQ_CHG` | float | Liquidity delta percentage |
| `TX_COUNT` | integer | Total transactions in window |
| `READOUT` | string | 2-4 line terminal-style analysis |

## API ENDPOINTS

### POST /api/analyze

Analyzes a token and returns doom verdict.

**Request Body:**
```json
{
  "token": "0x6982508145454Ce325dDbE47a25d4ec3d2311933"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "asset": "PEPE",
    "verdict": "MID",
    "window": "24H",
    "stats": {
      "price_change": -8.2,
      "volume_change": -34.5,
      "liquidity_change": -5.1,
      "tx_count": 67432
    },
    "readout": "Price drifting lower...",
    "timestamp": "2024-02-05T14:23:17Z"
  }
}
```

### GET /api/dexscreener?address={token_address}

Proxies DexScreener API requests.

**Query Parameters:**
- `address` (required): Token contract address

**Response:**
```json
{
  "pairs": [
    {
      "chainId": "ethereum",
      "priceChange": { "h24": -8.2 },
      "volume": { "h24": 1234567.89 },
      "liquidity": { "usd": 987654.32 },
      "txns": { "h24": { "buys": 3421, "sells": 3211 } }
    }
  ]
}
```

## SYSTEM PROMPT ARCHITECTURE

The LLM operates under a strict system prompt that enforces output formatting and tone:

```typescript
const SYSTEM_PROMPT = `You are a terminal-based token analysis system.

INPUT: You will receive ONLY these statistics:
- 24h price change (%)
- 24h volume change (%)
- Liquidity change (%)
- Transaction count

OUTPUT FORMAT (strict):
ASSET        : [SYMBOL]
VERDICT      : [LOW|MID|HIGH|ZERO]
WINDOW       : 24H
─────────────────────────────────────────
PRICE_CHG    : [value]
VOL_CHG      : [value]
LIQ_CHG      : [value]
TX_COUNT     : [value]
─────────────────────────────────────────
READOUT      :
[2-4 lines of analysis]

RULES:
1. Use ONLY provided statistics
2. No external knowledge
3. No financial advice language
4. No emojis or casual speech
5. Terminal voice: cold, blunt, clinical
6. No speculation beyond the data
7. 2-4 lines maximum for readout
8. No hallucinated numbers

VERDICT LOGIC:
- ZERO: Catastrophic metrics (price -50%+, volume collapse)
- HIGH: Severe deterioration (price -20-50%, volume decline)
- MID: Moderate decline (price -5-20%, mixed signals)
- LOW: Stable or positive (price flat/up, volume steady)`;
```

## RATE LIMITING & CACHING

```typescript
// DexScreener API: 300 requests/5 minutes
const DEXSCREENER_LIMIT = {
  requests: 300,
  window: 300000 // 5 minutes in ms
};

// OpenAI API: Depends on tier
// Implement request queuing for production

// Response caching: 60 seconds per token
const CACHE_TTL = 60000;
```

## DEPLOYMENT

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Add environment variables in Vercel dashboard under Settings > Environment Variables.

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t ai-doomer-terminal .
docker run -p 3000:3000 --env-file .env.local ai-doomer-terminal
```

## TESTING

```bash
# Run type checking
npm run type-check

# Run linter
npm run lint

# Run tests (if implemented)
npm test

# Test API endpoint locally
curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"token":"0x6982508145454Ce325dDbE47a25d4ec3d2311933"}'
```

## SECURITY CONSIDERATIONS

1. **API Key Protection**: Never expose OpenAI keys in client-side code
2. **Rate Limiting**: Implement request throttling to prevent abuse
3. **Input Validation**: Sanitize all user inputs (contract addresses)
4. **CORS Configuration**: Restrict API access to trusted domains
5. **Error Handling**: Never leak sensitive error details to client

## TERMINAL AESTHETICS

```css
/* Core terminal styling */
.terminal {
  background: #000000;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.4;
  padding: 20px;
}

.terminal-output {
  white-space: pre;
  animation: flicker 0.15s infinite;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.97; }
}
```

## PERFORMANCE BENCHMARKS

```
┌────────────────────────────────────────┐
│  METRIC              TARGET      ACTUAL│
├────────────────────────────────────────┤
│  API Response Time   <2s        1.2s   │
│  DexScreener Fetch   <800ms     650ms  │
│  LLM Processing      <1.5s      1.1s   │
│  UI Render Time      <100ms     45ms   │
│  Bundle Size         <500KB     380KB  │
└────────────────────────────────────────┘
```

## DISCLAIMER

```
╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  AI DOOMER TERMINAL PROVIDES INFORMATIONAL OUTPUT ONLY.                ║
║                                                                        ║
║  THIS SYSTEM DOES NOT:                                                 ║
║  - Provide financial advice                                            ║
║  - Recommend buying or selling tokens                                  ║
║  - Guarantee accuracy of verdicts                                      ║
║  - Predict future price movements                                      ║
║                                                                        ║
║  ALL VERDICTS ARE GENERATED BY AN AI MODEL ANALYZING MARKET DATA.      ║
║  CRYPTOCURRENCY TRADING CARRIES SIGNIFICANT RISK.                      ║
║  CONDUCT YOUR OWN RESEARCH. CONSULT FINANCIAL PROFESSIONALS.           ║
║                                                                        ║
║  USE AT YOUR OWN RISK.                                                 ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

## LICENSE

MIT License. See LICENSE file for details.

## CONTRIBUTING

This is a minimal, focused tool. Contributions should maintain the core philosophy:
- No feature bloat
- Terminal aesthetics only
- Data-driven verdicts
- No hype, no hopium

Submit issues or pull requests via GitHub.

---

```
[END OF TRANSMISSION]
[SYSTEM STATUS: OPERATIONAL]
[DOOM ANALYSIS READY]
```
