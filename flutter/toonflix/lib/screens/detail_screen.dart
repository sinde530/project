import 'package:flutter/material.dart';

class DetailScreen extends StatelessWidget {
  final String title, thumb, id;

  const DetailScreen({
    super.key,
    required this.title,
    required this.thumb,
    required this.id,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          shape: const Border(
            bottom: BorderSide(
              color: Colors.grey,
              width: 1,
            ),
          ),
          backgroundColor: Colors.white,
          foregroundColor: Colors.green,
          title: Text(
            title,
            style: const TextStyle(
              fontSize: 24,
            ),
          ),
        ),
        body: Column(
          children: [
            const SizedBox(
              height: 50,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Hero(
                  tag: id,
                  child: Container(
                    width: 200,
                    clipBehavior: Clip.hardEdge,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        boxShadow: const [
                          BoxShadow(
                            blurRadius: 10,
                            offset: Offset(0, 0),
                            color: Color.fromRGBO(0, 0, 0, 0.5),
                          ),
                        ]),
                    child: Image.network(
                      thumb,
                      headers: const {'Referer': 'https://comic.naver.com'},
                    ),
                  ),
                ),
              ],
            ),
          ],
        ));
  }
}
