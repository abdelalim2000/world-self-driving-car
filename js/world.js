class World {
  constructor(graph, roadWidth = 100, roadRoundness = 3) {
    this.graph = graph;
    this.roadWidth = roadWidth;
    this.roadRoundness = roadRoundness;

    this.envelops = [];

    this.generate();
  }

  generate() {
    this.envelops.length = 0;
    for (const seg of this.graph.segments) {
      this.envelops.push(new Envelope(seg, this.roadWidth, this.roadRoundness));
    }

    Polygon.multiBreak(this.envelops.map((e) => e.poly));
  }

  draw(ctx) {
    for (const env of this.envelops) {
      env.draw(ctx);
    }
  }
}
