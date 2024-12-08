class World {
  constructor(graph, roadWidth = 100, roadRoundness = 10) {
    this.graph = graph;
    this.roadWidth = roadWidth;
    this.roadRoundness = roadRoundness;

    this.envelops = [];
    this.roadBorders = [];

    this.generate();
  }

  generate() {
    this.envelops.length = 0;
    for (const seg of this.graph.segments) {
      this.envelops.push(new Envelope(seg, this.roadWidth, this.roadRoundness));
    }

    this.roadBorders = Polygon.union(this.envelops.map((e) => e.poly));
  }

  draw(ctx) {
    for (const env of this.envelops) {
      env.draw(ctx, { fill: "#BBB", stroke: "#BBB", lineWidth: 15 });
    }
    for (const seg of this.graph.segments) {
      seg.draw(ctx, { color: "white", width: 4, dash: [10, 10] });
    }
    for (const seg of this.roadBorders) {
      seg.draw(ctx, { color: "white", width: 4 });
    }
  }
}
