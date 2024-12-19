import 'package:http/http.dart' as http;

class APiService {
  final String baseUrl = 'https://webtoon-crawler.nomadcoders.workers.dev';
  final String today = 'today';

  Future<void> getTodaysToons() async {
    try {
      final url = Uri.parse('$baseUrl/$today');
      final response = await http.get(url);

      if (response.statusCode == 200) {
        print(response.body);
      } else {
        print('Error : ${response.statusCode}');
      }
    } catch (error) {
      print('Failed to fetch data: $error');
      throw Error();
    }
  }
}
