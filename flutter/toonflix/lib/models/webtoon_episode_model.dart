class WebtoonEpisodeModel {
  final String title, id, rating, date;

  WebtoonEpisodeModel({
    required this.title,
    required this.id,
    required this.rating,
    required this.date,
  });

  factory WebtoonEpisodeModel.fromJson(Map<String, dynamic> json) {
    return WebtoonEpisodeModel(
      title: json['title'] as String,
      id: json['id'] as String,
      rating: json['rating'] as String,
      date: json['date'] as String,
    );
  }
}
