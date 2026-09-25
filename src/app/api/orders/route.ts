import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.N8N_ORDERS_WEBHOOK_URL;
    const webhookSecret = process.env.SR_STORE_WEBHOOK_SECRET;

    if (!webhookUrl || !webhookSecret) {
      return NextResponse.json(
        { success: false, error: "n8n environment variables are missing" },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-sr-store-secret": webhookSecret,
      },
      body: JSON.stringify(body),
    });

    const data = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "n8n webhook failed",
          details: data,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data ? JSON.parse(data) : null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send order to n8n",
      },
      { status: 500 }
    );
  }
}
