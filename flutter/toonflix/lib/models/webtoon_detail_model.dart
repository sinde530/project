class WebtoonDetailModel {
  final String title, about, genre, age;

  WebtoonDetailModel({
    required this.title,
    required this.about,
    required this.genre,
    required this.age,
  });

  factory WebtoonDetailModel.fromJson(Map<String, dynamic> json) {
    return WebtoonDetailModel(
      title: json['title'] as String,
      about: json['about'] as String,
      genre: json['genre'] as String,
      age: json['age'] as String,
    );
  }
}
