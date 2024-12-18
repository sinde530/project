import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:toonflix/models/webtoon_model.dart';

class ApiService {
  static const String baseUrl =
      'https://webtoon-crawler.nomadcoders.workers.dev';
  static const String today = 'today';

  static Future<List<WebtoonModel>> getTodaysToons() async {
    List<WebtoonModel> webtoonInstances = [];

    try {
      final url = Uri.parse('$baseUrl/$today');
      final response = await http.get(url);

      if (response.statusCode == 200) {
        final webtoons = jsonDecode(response.body);
        for (var webtoon in webtoons) {
          final instance = WebtoonModel.fromJson(webtoon);
          webtoonInstances.add(instance);
        }
        return webtoonInstances;
      } else {
        throw Exception(
            'Failed to load webtoons with status code ${response.statusCode}');
      }
    } catch (error) {
      throw Exception('Failed to load webtoons with status code : $error');
    }
  }
}
