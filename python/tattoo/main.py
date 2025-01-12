import cv2
import numpy as np
from sklearn.cluster import KMeans
from matplotlib import pyplot as plt

def extract_skin_color(image_path):
    image = cv2.imread(image_path)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    
    hsv_image = cv2.cvtColor(image, cv2.COLOR_RGB2HSV)
    
    # 피부 색상 필터 (HSV 범위 설정)
    lower_skin = np.array([0, 20, 70], dtype=np.uint8)  # 낮은 범위
    upper_skin = np.array([20, 255, 255], dtype=np.uint8)  # 높은 범위
    skin_mask = cv2.inRange(hsv_image, lower_skin, upper_skin)
    
    skin = cv2.bitwise_and(image, image, mask=skin_mask)
    
    reshaped_skin = skin.reshape((-1, 3))
    reshaped_skin = reshaped_skin[np.any(reshaped_skin != [0, 0, 0], axis=1)]  
    
    if len(reshaped_skin) == 0:
        raise ValueError("Skin area not detected in the image.")
    
    kmeans = KMeans(n_clusters=1, random_state=42)
    kmeans.fit(reshaped_skin)
    dominant_color = kmeans.cluster_centers_[0].astype(int)
    
    return dominant_color

def suggest_tattoo_design(skin_color):
    # 타투 디자인 추천 (간단히 대비 색상 추천 예제)
    complementary_color = [255 - skin_color[0], 255 - skin_color[1], 255 - skin_color[2]]
    print(f"Skin Color: {skin_color}")
    print(f"Recommended Tattoo Color: {complementary_color}")
    return complementary_color


image_path = "user.webp"
try:
    skin_color = extract_skin_color(image_path)
    tattoo_color = suggest_tattoo_design(skin_color)
    
    plt.figure(figsize=(8, 4))
    plt.subplot(1, 2, 1)
    plt.imshow(cv2.imread(image_path)[:, :, ::-1])
    plt.title("User Image")
    plt.axis("off")
    
    plt.subplot(1, 2, 2)
    plt.imshow([[skin_color / 255]])
    plt.title("Detected Skin Color")
    plt.axis("off")
    
    plt.show()
except ValueError as e:
    print(f"Error: {e}")
