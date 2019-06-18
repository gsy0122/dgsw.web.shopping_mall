package kr.hs.dgsw.shopping_back.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Product {
    private Long id;
    private String name;
    private int mileage;
    private int price; // 원가
    private int cost; // 판매가
    private Long menuId;
    private Long subMenuId;
    private Long eventId;
    private Long attachId;
    private String factory;
    private String details;
}
