#!/usr/bin/env -S uv run
# /// script
# dependencies = [
#   "pandas",
#   "plotly",
#   "kaleido",
# ]
# ///
"""
Generate keyword timeline visualization for year-in-review post
Uses Plotly for beautiful, publication-ready charts

Usage: uv run generate_chart.py
"""

import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots

# Read the keyword frequency data (relative to script location)
import os
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, '..', 'data', 'sglawwatch_query4.csv')
df = pd.read_csv(data_path)

# Calculate adoption cluster total
df['adoption_total'] = (
    df['training_program'] +
    df['adoption'] +
    df['innovation'] +
    df['efficiency'] +
    df['opportunity'] +
    df['launch']
)

# Calculate accountability cluster total
df['accountability_total'] = (
    df['accountability'] +
    df['discipline'] +
    df['sanctions'] +
    df['verification'] +
    df['duty_obligation'] +
    df['oversight'] +
    df['misuse'] +
    df['dismissal']
)

# Create figure
fig = go.Figure()

# Add filled area for adoption (with transparency)
fig.add_trace(go.Scatter(
    x=df['month'],
    y=df['adoption_total'],
    mode='lines',
    name='Adoption (fill)',
    line=dict(color='#9B7EBD', width=0),
    fill='tozeroy',
    fillcolor='rgba(155, 126, 189, 0.2)',
    hoverinfo='skip',
    showlegend=False
))

# Add filled area for accountability (with transparency)
fig.add_trace(go.Scatter(
    x=df['month'],
    y=df['accountability_total'],
    mode='lines',
    name='Accountability (fill)',
    line=dict(color='#C8536B', width=0),
    fill='tozeroy',
    fillcolor='rgba(200, 83, 107, 0.2)',
    hoverinfo='skip',
    showlegend=False
))

# Add adoption trend line on top
fig.add_trace(go.Scatter(
    x=df['month'],
    y=df['adoption_total'],
    mode='lines+markers',
    name='Adoption Keywords',
    line=dict(color='#9B7EBD', width=3),
    marker=dict(size=10, color='#9B7EBD'),
    hovertemplate='<b>%{x}</b><br>Adoption: %{y} mentions<extra></extra>'
))

# Add accountability trend line on top
fig.add_trace(go.Scatter(
    x=df['month'],
    y=df['accountability_total'],
    mode='lines+markers',
    name='Accountability Keywords',
    line=dict(color='#C8536B', width=3),
    marker=dict(size=10, color='#C8536B'),
    hovertemplate='<b>%{x}</b><br>Accountability: %{y} mentions<extra></extra>'
))

# Add vertical line at October 3 (using shape for categorical x-axis)
fig.add_shape(
    type="line",
    x0='2025-10',
    x1='2025-10',
    y0=0,
    y1=1,
    yref='paper',
    line=dict(color="rgba(200, 83, 107, 0.5)", width=2, dash="dash")
)

# Add annotation for the October line
fig.add_annotation(
    x='2025-10',
    y=1,
    yref='paper',
    text="Oct 3: $800 Fine",
    showarrow=False,
    yshift=10,
    font=dict(size=12, color="#C8536B"),
    bgcolor="rgba(255,255,255,0.8)",
    bordercolor="#C8536B",
    borderwidth=1,
    borderpad=4
)

# Update layout
fig.update_layout(
    title={
        'text': 'How AI Coverage Shifted: Adoption → Accountability<br><sub>Keyword frequency in Singapore legal news (Apr-Dec 2025)</sub>',
        'x': 0.5,
        'xanchor': 'center',
        'font': {'size': 20, 'color': '#2C3E50'}
    },
    xaxis_title='Month (2025)',
    yaxis_title='Keyword Mentions in Articles',
    font=dict(family="Inter, sans-serif", size=13, color="#2C3E50"),
    hovermode='x unified',
    plot_bgcolor='white',
    paper_bgcolor='white',
    width=1200,
    height=600,
    margin=dict(l=80, r=80, t=100, b=80),
    legend=dict(
        orientation="h",
        yanchor="bottom",
        y=1.02,
        xanchor="right",
        x=1,
        font=dict(size=14)
    ),
    xaxis=dict(
        showgrid=True,
        gridcolor='rgba(0,0,0,0.1)',
        showline=True,
        linewidth=1,
        linecolor='rgba(0,0,0,0.2)'
    ),
    yaxis=dict(
        showgrid=True,
        gridcolor='rgba(0,0,0,0.1)',
        showline=True,
        linewidth=1,
        linecolor='rgba(0,0,0,0.2)',
        rangemode='tozero'
    )
)

# Add annotations for key insights
fig.add_annotation(
    x='2025-05',
    y=12,
    text="Peak Adoption:<br>SAL Training Launch",
    showarrow=True,
    arrowhead=2,
    arrowsize=1,
    arrowwidth=2,
    arrowcolor="#9B7EBD",
    ax=40,
    ay=-40,
    font=dict(size=11, color="#9B7EBD"),
    bgcolor="rgba(255,255,255,0.9)",
    bordercolor="#9B7EBD",
    borderwidth=1,
    borderpad=4
)

fig.add_annotation(
    x='2025-10',
    y=18,
    text="Accountability Spike:<br>3x increase in one month",
    showarrow=True,
    arrowhead=2,
    arrowsize=1,
    arrowwidth=2,
    arrowcolor="#C8536B",
    ax=-60,
    ay=-40,
    font=dict(size=11, color="#C8536B"),
    bgcolor="rgba(255,255,255,0.9)",
    bordercolor="#C8536B",
    borderwidth=1,
    borderpad=4
)

# Save as high-resolution PNG
print("Generating visualization...")
image_path = os.path.join(script_dir, '..', 'images', 'keyword_timeline_chart.png')
html_path = os.path.join(script_dir, 'keyword_timeline_preview.html')

fig.write_image(
    image_path,
    width=1200,
    height=600,
    scale=2  # 2x for retina displays
)
print(f"✅ Chart saved as: {image_path}")

# Also save as HTML for interactive preview (keep in scripts/)
fig.write_html(html_path)
print(f"✅ Interactive preview saved as: {html_path}")

# Print summary stats
print("\n📊 Summary Statistics:")
print(f"Peak Adoption: {df['adoption_total'].max()} mentions ({df.loc[df['adoption_total'].idxmax(), 'month']})")
print(f"Peak Accountability: {df['accountability_total'].max()} mentions ({df.loc[df['accountability_total'].idxmax(), 'month']})")
print(f"\nPre-October avg: {df[df['month'] < '2025-10']['accountability_total'].mean():.1f} accountability mentions")
print(f"Post-October avg: {df[df['month'] >= '2025-10']['accountability_total'].mean():.1f} accountability mentions")
print(f"Increase: {((df[df['month'] >= '2025-10']['accountability_total'].mean() / df[df['month'] < '2025-10']['accountability_total'].mean()) - 1) * 100:.0f}%")
