
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    asset: body.asset ?? "UNKNOWN",
    verdict: "HIGH DOOM",
    window: "24H",
    stats: {
      priceChange: "-18.4%",
      liquidityChange: "-22.1%",
      volumeChange: "-41.7%"
    },
    readout: [
      "liquidity is leaving.",
      "volume died before price did.",
      "this is walking to zero."
    ]
  });
}
