class WebtoonModel {
  final String title;
  final String thumb;
  final String id;

  WebtoonModel({required this.title, required this.thumb, required this.id});

// factory 생성자는 생성자와는 별개로, 조건부 객체 생성 로직을 추가하거나 디버깅하기 더 쉽다.//
// ignore: slash_for_doc_comments
  /**
   * 장점
   * - Dart의 factory를 활용하면, 더 선언적이고 유지보수가 쉬운 구조를 가질 수 있음.
   * - json 데이터를 직접 다룰 때 타입 캐스팅도 명시적으로 처리 가능.
   */
  factory WebtoonModel.fromJson(Map<String, dynamic> json) {
    return WebtoonModel(
      title: json['title'] as String,
      thumb: json['thumb'] as String,
      id: json['id'] as String,
    );
  }
}
